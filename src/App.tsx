import './App.css';
import React, { useState, useEffect } from 'react';
import Text from './component/Text';
import Sms from './component/Sms';
import Url from './component/Url';
import Phone from './component/Phone';
import Mail from './component/Mail';
import Whatsapp from './component/Whatsapp';
import Location from './component/Location';
import Wifi from './component/Wifi';
import Event from './component/Event';
import Paypal from './component/Paypal';
import Crypto from './component/Crypto';
import SiteUrl from './component/SiteUrl';

import { BiText } from 'react-icons/bi';
import { FaSms } from 'react-icons/fa';
import { HiLink } from 'react-icons/hi';
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdLocationPin } from 'react-icons/md';
import { FaWifi } from 'react-icons/fa';
import { BsCalendarEventFill } from 'react-icons/bs';
import { BsPaypal } from 'react-icons/bs';
import { GrBitcoin } from 'react-icons/gr';
import { HiOutlineExternalLink } from 'react-icons/hi';

function App() {
  const [active, setActive] = useState('Text');

  return (
    <div>
      <div className='buttons'>
        {Buttons.map((i) => {
          return (
            <button onClick={() => { setActive(i.name) }} className={active === i.name ? 'acive' : ''}><span>{i.icon}</span>{i.name}</button>
          )
        })}
      </div>

      {active === 'Text' ? <Text />
        : active === 'Url' ? <Url />
          : active === 'Sms' ? <Sms />
            : active === 'Phone' ? <Phone />
              : active === 'Mail' ? <Mail />
                : active === 'Whatsapp' ? <Whatsapp />
                  : active === 'Wifi' ? <Wifi />
                    : active === 'Event' ? <Event />
                      : active === 'Paypal' ? <Paypal />
                        : active === 'Crypto' ? <Crypto />
                          : active === 'Get Url' ? <SiteUrl />
                            : active === 'Location' ? <Location /> :
                              <Text />}


    </div>
  );
}
export default App;
const Buttons = [
  {
    id: 1,
    name: 'Text',
    icon: <BiText />
  },
  {
    id: 2,
    name: 'Sms',
    icon: <FaSms />
  },
  {
    id: 3,
    name: 'Url',
    icon: <HiLink />
  },
  {
    id: 4,
    name: 'Phone',
    icon: <BsFillTelephoneOutboundFill />
  },
  {
    id: 5,
    name: 'Mail',
    icon: <HiMail />
  },
  {
    id: 6,
    name: 'Whatsapp',
    icon: <IoLogoWhatsapp />
  },
  {
    id: 7,
    name: 'Location',
    icon: <MdLocationPin />
  },
  {
    id: 8,
    name: 'Wifi',
    icon: <FaWifi />
  },
  {
    id: 9,
    name: 'Event',
    icon: <BsCalendarEventFill />
  },
  {
    id: 10,
    name: 'Paypal',
    icon: <BsPaypal />
  },
  {
    id: 11,
    name: 'Crypto',
    icon: <GrBitcoin />
  },
  {
    id: 12,
    name: 'Get Url',
    icon: <HiOutlineExternalLink />
  },

]