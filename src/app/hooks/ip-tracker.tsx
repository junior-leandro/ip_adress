'use client'

import { useState, useEffect, FormEvent } from "react";

import ipAdressApi from '../services/ipAdressApi'

const useIpTracker = () => {
  // O IP que será rastreado
  const [ip, setIp] = useState("");

  // dados a serem exibidos
  const [ipAdress, setIpAdress] = useState("");
  const [location, setLocation] = useState("");
  const [timezone, setTimezone] = useState("");
  const [isp, setISP] = useState("");

  // latitude e longitude
  const [position, setPosition] = useState<[number, number]>([0,0]);

  // erros
  const [ipErrorStatus, setIpErrorStatus] = useState(false);


  // Rastrear endereço de IP
  const handleSubmitIp = async (e: FormEvent) => {
    e.preventDefault();
    const data = await ipAdressApi
      .get(`&ipAddress=${ip}`)
      .then((r) => r.data)
      .catch((err) => {
        setIpErrorStatus(true);
        alert("Invalid ip, try again");
      });

    // definindo os dados
    if (data) {
      setIpAdress(data.ip);
      setLocation(
        `${data.location.region}, ${data.location.country} ${data.location.postalCode}`
      );
      setTimezone(`UTC ${data.location.timezone}`);
      setISP(data.isp);
      setPosition([data.location.lat, data.location.lng]);
    }
  };

  useEffect(() => {
    const handleData = async () => {
      // solicitação sem IP, a API retornará dados com base no endereço IP do usuário
      const data = await ipAdressApi
        .get(``)
        .then((r) => r.data)
        .catch((err) => {
          console.log(err);
        });

      // se dados são validos
      if (data) {
        setIpAdress(data.ip);
        setLocation(
          `${data.location.region}, ${data.location.country} ${data.location.postalCode}`
        );
        setTimezone(`UTC ${data.location.timezone}`);
        setISP(data.isp);
        setPosition([data.location.lat, data.location.lng]);
      }
    };

    handleData();
  }, []);

  useEffect(() => {
    if (ipErrorStatus) {
      document.querySelector('input[name="ip-adress"]')?.classList.add("error");
    } else {
      document
        .querySelector('input[name="ip-adress"]')
        ?.classList.remove("error");
    }
  }, [ipErrorStatus]);

  console.log(`Position: ${position}, IP: ${ipAdress}`)
  return {
    ip,
    setIp,
    handleSubmitIp,
    ipAdress,
    location,
    isp,
    timezone,
    position,
    setIpErrorStatus,
    setPosition,
    
  };
};

export default useIpTracker;