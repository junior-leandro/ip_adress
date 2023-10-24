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

  // location
  const [position, setPosition] = useState<[number, number]>([0, 0]);

  // erros
  const [ipErrorStatus, setIpErrorStatus] = useState(false);


  // tracking the ip adress
  const handleSubmitIp = async (e: FormEvent) => {
    e.preventDefault();
    const data = await ipAdressApi
      .get(`&ipAddress=${ip}`)
      .then((r) => r.data)
      .catch((err) => {
        setIpErrorStatus(true);
        alert("Invalid ip, try again");
      });

    // It's putting all keys information on states
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
      // request without a ip, the api will return data based on the user ip address
      const data = await ipAdressApi
        .get(``)
        .then((r) => r.data)
        .catch((err) => {
          console.log(err);
        });

      // if data is valid
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
/*
  useEffect(() => {
    if (ipErrorStatus) {
      document.querySelector('input[name="ip-adress"]')?.classList.add("error");
    } else {
      document
        .querySelector('input[name="ip-adress"]')
        ?.classList.remove("error");
    }
  }, [ipErrorStatus]);
*/
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
  };
};

export default useIpTracker;