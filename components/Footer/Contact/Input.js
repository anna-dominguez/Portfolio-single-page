const Input = ({ children, error }) => (
  <div
    className={`flex flex-row border-b-[1px] w-full pb-4
            ${error ? 'border-red' : 'border-green'}
            ${error === 1 && 'border-white'}`}
  >
    {children}
  </div>
)

export default Input
