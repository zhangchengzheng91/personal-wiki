import Side from './side.js';
import '../styles/global.css'

export default function Layout(props) {
  return (
    <html>
      <head>
        <meta charSet="UTF-8"/>
      </head>
      <body>
        <div className='flex w-25'>
          <Side />
          {props.children}
          1234
          <div className='text-3xl font-bold underline'>
            test
          </div>
        </div>
      </body>
    </html>

  )
}
