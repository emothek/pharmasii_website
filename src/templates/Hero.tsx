import React, { useState } from 'react';

import Link from 'next/link';
import {
  FacebookShareButton,
  ViberShareButton,
  WhatsappShareButton,
  FacebookIcon,
  ViberIcon,
  WhatsappIcon,
} from 'react-share';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => {
  const [contact, setContact] = useState({
    email: '',
    officine: '',
    phone: '',
    subject: 'PHARMASII - New lead',
    replyTo: 'pharmasii.saas@gmail.com', // this will set replyTo of email to email address entered in the form
    accessKey: 'c0f2cdfb-30df-494e-adee-91740748c2c8', // get your access key from https://www.staticforms.xyz
  });

  const [showModal, setShowModal] = React.useState(false);

  const [response, setResponse] = useState({
    type: '',
    message: '',
  });

  const shareUrl = 'https://pharmasii.netlify.app';

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleOfficine = (e: { target: { name: any; checked: Boolean } }) => {
    if (e.target.checked) {
      setContact({
        ...contact,
        officine: JSON.stringify(e.target.checked),
      });
    } else setContact({ ...contact, officine: JSON.stringify(e.target.checked) });
  };

  const handleSubmit = async (ev: { preventDefault: () => void }) => {
    ev.preventDefault();
    setShowModal(true);

    try {
      const res = await fetch('https://formspree.io/f/xknkrvyl', {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: { 'Content-Type': 'application/json' },
      });

      const json = await res.json();

      if (json.ok) {
        setResponse({
          type: 'success',
          message: 'Merci pour votre inscription.',
        });
      } else {
        setResponse({
          type: 'error',
          message: json.message,
        });
      }
    } catch (e) {
      console.log('An error occurred', e);
      setResponse({
        type: 'error',
        message: 'An error occured while submitting the form',
      });
    }
  };

  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            <Link href="#f">
              <a>Inscrivez-vous</a>
            </Link>
          </li>
        </NavbarTwoColumns>
      </Section>

      <Section yPadding="pt-20 pb-32">
        <HeroOneButton
          title={(
            <>
              {'Fédeliser vos clients avec\n'}
              <span className="text-primary-500" id="f">
                Le Pharmacien Assistant Virtuel
              </span>
            </>
          )}
          description="Envoyez à vos patients des ⏰ rappels de prise de 💊 médicaments, des conseils et des annonces de produits ⌁ directement sur leurs 📲 mobiles"
        />

        <div className={response.type === 'success' ? 'backdrop-filter backdrop-sepia' : 'hidden'}>
          <p>{response.message}</p>
        </div>
        <div
          className={response.type === 'error' ? 'backdrop-filter backdrop-sepia' : 'hidden'}
          style={{ backgroundColor: 'darkcyan' }}
        >
          <p>{response.message}</p>
        </div>

        <div className="flex justify-center">
          <span className="text-center  text-3xl ">Inscrivez-vous ici</span>
        </div>

        <div className="p-4 justify-center sm:flex border-solid border-4 border-light-blue-500">
          <form className="sm:flex" method="post" onSubmit={handleSubmit}>
            <div className="space-y-6 flex flex-col center">
              <label className="inline-flex items-center mt-3" htmlFor="officine">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 sm:rounded-lg text-red-600"
                  onChange={handleOfficine}
                  name="officine"
                  id="officine"
                />
                <span className="ml-2 text-gray-700 font-extrabold">
                  Je suis Pharmacien(ne) installé(e)
                </span>
              </label>

              <div className="mt-1 flex sm-max:flex-col rounded-md shadow-sm">
                <input
                  className="bg-gray-200 shadow-inner sm:rounded-lg p-2 flex-1 font-extrabold text-xl placeholder-gray-400"
                  id="phone"
                  name="phone"
                  type="tel"
                  aria-label="numéro de téléphone"
                  placeholder="Entrez votre numéroe de téléphone"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mt-1 flex sm-max:flex-col rounded-md shadow-sm">
                <input
                  className="bg-gray-200 shadow-inner sm:rounded-l-lg p-2 flex-1 font-extrabold text-xl placeholder-gray-400"
                  id="email"
                  name="email"
                  type="email"
                  aria-label="email address"
                  placeholder="Enter your email address"
                  onChange={handleChange}
                  required
                />
                <button
                  className="bg-primary-600 hover:bg-blue-500 duration-300 text-white  sm:rounded-r-lg  font-extrabold text-xl py-4 px-6 w-full"
                  type="submit"
                >
                  S&apos;inscrire
                </button>
              </div>
            </div>
          </form>
        </div>

        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-sm">
                {/* content */}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/* header */}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Inscription réussite</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/* body */}
                  <div className="relative p-6 flex-auto">
                    <p className="flex justify-center my-4 text-blueGray-500 text-lg leading-relaxed">
                      Invitez des amis
                    </p>

                    <div className="flex justify-center space-x-6">
                      <div>
                        <WhatsappShareButton url={shareUrl}>
                          <WhatsappIcon size={32} round />
                        </WhatsappShareButton>
                      </div>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <div>
                        <ViberShareButton url={shareUrl}>
                          <ViberIcon size={32} round />
                        </ViberShareButton>
                      </div>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <div>
                        <FacebookShareButton url={shareUrl}>
                          <FacebookIcon size={32} round />
                        </FacebookShareButton>
                      </div>
                    </div>
                  </div>
                  {/* footer */}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Fermer
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black" />
          </>
        ) : null}
      </Section>
    </Background>
  );
};

export { Hero };
