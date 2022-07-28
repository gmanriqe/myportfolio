export const Footer = () => {
    return (
        <footer className='footer py-5'>
            <div className='max-w-screen-lg mx-auto px-4'>
                <section className='grid grid-cols-1 gap-3'>
                    <div className='flex flex-col sm:flex-row justify-between text-center sm:text-left'>
                        <div>
                            <p className='technologys'> Developed width
                                <a href='https://reactjs.org/' target='_blank' title='REACTJS' rel="noreferrer"><strong> ReactJS</strong></a>,
                                <a href='https://tailwindcss.com/' target='_blank' title='TAILWINDCSS' rel="noreferrer"> <strong>TailwindCSS</strong></a>,
                                <a href='https://vercel.com/' target='_blank' title='VERCEL' rel="noreferrer"> <strong>Vercel</strong></a>
                            </p>
                        </div>
                        <div className='text-center sm:text-right'>
                            Designed & Built by Jesús Gonzales
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    )
}