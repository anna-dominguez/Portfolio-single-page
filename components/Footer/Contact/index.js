import { useState } from 'react'

import Input from './Input'
import InputError from './InputError'
import { sendContactForm } from '@/lib/api'

const initialString = ''
const initialError = 1

const Contact = () => {
  const [name, setName] = useState(initialString)
  const [email, setEmail] = useState(initialString)
  const [message, setMessage] = useState(initialString)
  const [errorName, setErrorName] = useState(initialError)
  const [errorEmail, setErrorEmail] = useState(initialError)
  const [errorMessage, setErrorMessage] = useState(initialError)
  const [sendFailed, setSendFailed] = useState(null)

  const handleSubmit = async () => {
    if (errorName || errorEmail || errorMessage) return
    try {
      await sendContactForm({ name, email, message })
      setName(initialString)
      setEmail(initialString)
      setMessage(initialString)
      setErrorName(initialError)
      setErrorEmail(initialError)
      setErrorMessage(initialError)
      setSendFailed(false)
    } catch (error) {
      setSendFailed(true)
    }
  }

  const Warning = ({ error }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#FF6F5B"
      className={`w-6 h-6 ${(!error || error === 1) && 'hidden'}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
      />
    </svg>
  )

  return (
    <div>
      <div className="mt-12 flex flex-col">
        <Input error={errorName}>
          <input
            className="input"
            placeholder="NAME"
            value={name}
            onChange={(e) => {
              const name = e.target.value
              setName(e.target.value)
              if (name.length) setErrorName(false)
              else setErrorName(true)
            }}
            type="text"
            name="name"
            id="name"
          />
          <Warning error={errorName} />
        </Input>
        <InputError error={errorName} />
        <Input error={errorEmail}>
          <input
            className="input"
            placeholder="EMAIL"
            value={email}
            onChange={(e) => {
              const email = e.target.value
              setEmail(email)
              if (
                email.length &&
                email.match(
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                )
              )
                setErrorEmail(false)
              else setErrorEmail(true)
            }}
            type="email"
            name="email"
            id="email"
          />
          <Warning error={errorEmail} />
        </Input>
        <InputError error={errorEmail} />
        <Input error={errorMessage}>
          <textarea
            className="input pb-20"
            placeholder="MESSAGE"
            value={message}
            onChange={(e) => {
              const message = e.target.value
              setMessage(message)
              if (message.length) setErrorMessage(false)
              else setErrorMessage(true)
            }}
            name="message"
            id="message"
          />
          <Warning error={errorMessage} />
        </Input>
        <InputError error={errorMessage} />
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => handleSubmit()}
          className="btn-primary justify-end"
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
