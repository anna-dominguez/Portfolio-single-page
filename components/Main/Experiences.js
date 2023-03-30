const experiences = [
  { name: 'HTML', time: '4 Years Experience' },
  { name: 'CSS', time: '4 Years Experience' },
  { name: 'Javascript', time: '4 Years Experience' },
  { name: 'Accessibility', time: '2 Years Experience' },
  { name: 'React', time: '2 Years Experience' },
  { name: 'Sass', time: '2 Years Experience' },
]

const Experiences = () => (
  <div className="my-10 sm:mt-12 lg:mt-14 sm:mb-24 lg:mb-36 grid gap-6 sm:gap-12 sm:grid-cols-2 lg:grid-cols-3">
    {experiences.map(({ name, time }) => (
      <div
        key={name}
        className="grid gap-px sm:gap-3.5 text-center sm:text-left"
      >
        <h2 className="text-headingS sm:text-headingL tracking-[-1px[">
          {name}
        </h2>
        <div className="text-bodyS sm:text-bodyM text-grey">{time}</div>
      </div>
    ))}
  </div>
)

export default Experiences
