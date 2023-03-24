const InputError = ({ error }) => (
  <div
    className={`text-right text-red text-[12px] tracking-[-0.17px] ${
      error && error !== 1 ? 'mt-1 mb-3' : 'mb-8'
    }`}
  >
    {error && error !== 1 && 'Sorry, invalid format here'}
  </div>
)

export default InputError
