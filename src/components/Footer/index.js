export const Footer = () => {
    return (
        <footer className='footer py-5'>
            <div className='max-w-screen-lg mx-auto px-4'>
                <section className='grid grid-cols-1 gap-3'>
                    <div className='flex flex-col sm:flex-row justify-between text-center sm:text-left'>
                        <div>
                            <p className='technologys'> Desarrollado con
                                <a href='https://reactjs.org/' target='_blank' title='REACTJS' rel="noreferrer"> ReactJS</a>,
                                <a href='https://tailwindcss.com/' target='_blank' title='TAILWINDCSS' rel="noreferrer"> TailwindCSS</a>,
                                <a href='https://vercel.com/' target='_blank' title='VERCEL' rel="noreferrer"> Vercel</a>
                            </p>
                        </div>
                        <div className='text-center sm:text-right'>
                            ❤ by Frontend Developer. Hecho en Perú
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    )
}