import { useEffect, useState } from 'react'

import Button from '@/tools/Button'
import { sendContactForm } from '@/lib/api'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sendFailed, setSendFailed] = useState('')

  const [errorName, setErrorName] = useState(1)
  const [errorEmail, setErrorEmail] = useState(1)
  const [errorMessage, setErrorMessage] = useState(1)

  const handleSubmit = async () => {
    let errors = 0
    if (name.length) setErrorName(false)
    else {
      errors += 1
      setErrorName(true)
    }
    if (
      email.length &&
      email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    )
      setErrorEmail(false)
    else {
      errors += 1
      setErrorEmail(true)
    }
    if (message.length) setErrorMessage(false)
    else {
      errors += 1
      setErrorMessage(true)
    }

    if (errors) return
    try {
      await sendContactForm({ name, email, message })
      setName('')
      setEmail('')
      setMessage('')
      setSendFailed(false)
    } catch (error) {
      setSendFailed(true)
    }
  }

  return (
    <div>
      <div className="mt-12 flex flex-col">
        <div
          className={`flex flex-row border-b-[1px] w-full pb-4
            ${errorName ? 'border-red' : 'border-green'}
            ${errorName === 1 && 'border-white'}`}
        >
          <input
            className="uppercase text-bodyS tracking-[-0.22px] bg-darkGrey pl-6 w-full"
            placeholder="NAME"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            id="name"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#FF6F5B"
            className={`w-6 h-6 ${(!errorName || errorName === 1) && 'hidden'}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
        </div>
        <div
          className={`text-right text-red text-[12px] tracking-[-0.17px] ${
            errorName && errorName !== 1 ? 'mt-1 mb-3' : 'mb-8'
          }`}
        >
          {errorName && errorName !== 1 && 'Sorry, invalid format here'}
        </div>
        <div
          className={`flex flex-row border-b-[1px] w-full pb-4
            ${errorEmail ? 'border-red' : 'border-green'}
            ${errorEmail === 1 && 'border-white'}`}
        >
          <input
            className="uppercase text-bodyS tracking-[-0.22px] bg-darkGrey w-full pl-6"
            placeholder="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#FF6F5B"
            className={`w-6 h-6 ${
              (!errorEmail || errorEmail === 1) && 'hidden'
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
        </div>
        <div
          className={`text-right text-red text-[12px] tracking-[-0.17px] ${
            errorEmail && errorEmail !== 1 ? 'mt-1 mb-3' : 'mb-8'
          }`}
        >
          {errorEmail && errorEmail !== 1 && 'Sorry, invalid format here'}
        </div>
        <div
          className={`flex flex-row border-b-[1px] w-full pb-4
            ${errorMessage ? 'border-red' : 'border-green'}
            ${errorMessage === 1 && 'border-white'}`}
        >
          <textarea
            className="uppercase text-bodyS tracking-[-0.22px] bg-darkGrey w-full pb-20 pl-6"
            placeholder="MESSAGE"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            name="message"
            id="message"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#FF6F5B"
            className={`w-6 h-6 ${
              (!errorMessage || errorMessage === 1) && 'hidden'
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
        </div>
      </div>
      <div
        className={`text-right text-red text-[12px] tracking-[-0.17px] ${
          errorMessage && errorMessage !== 1 ? 'mt-1 mb-3' : 'mb-8'
        }`}
      >
        {errorMessage && errorMessage !== 1 && 'Sorry, invalid format here'}
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => handleSubmit()}
          className="hover:text-green pb-2.5 cursor-pointer border-solid border-b-2 border-green text-bodyS uppercase tracking-[2.29px]"
        >
          Send message
        </button>
      </div>
      {typeof sendFailed === 'boolean' && (
        <div
          className={`mt-2 py-2 text-base flex ${
            sendFailed ? 'text-red' : 'text-green'
          }`}
          role="alert"
        >
          {sendFailed ? 'ERROR SENDING EMAIL' : 'EMAIL SENT SUCCESSFULLY'}
        </div>
      )}
    </div>
  )
}

export default Contact
