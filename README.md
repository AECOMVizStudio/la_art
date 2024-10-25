# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```


const meetingLinks = (
  `


  
          {/* Virtual Meeting Link*/}
          <div className="border-2 border-solid border-burnt-orange rounded w-fit ">
            

          <h3 className="font-semibold pt-4 pr-4"> Virtual Meeting: Los Angeles State Historic Park General Plan Amendment </h3>
          <p className="font-normal pt-4">Thursday, October 17, 2024, 6:00 - 7:00 PM</p>

            <div className="ml-6 font-normal flex flex-col space-y-2 py-2">
              
                <a 
                  href='https://us06web.zoom.us/j/84925758637'
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                  >https://us06web.zoom.us/j/84925758637</a>

                <p>Or join by telephone: <br></br>
                  (669) 900-6833 US <br></br>
                  (888) 475-4499 US Toll Free 
                </p>
                <p>Webinar ID: 849 2575 8637</p>
            </div>
             
            </div>

          {/* In-Person Meeting Link*/}
          <div>
            <h3 className="font-semibold pt-4">
              In-Person Meeting: Los Angeles State Historic Park General Plan Amendment
            </h3>
            <p className="font-normal pt-4">
              Saturday, October 19, 2024, 10:00 AM - 12:00 PM <br></br>
              Fred Harvey at Los Angeles Union Station, 800 Alameda Street, CA, 90012
            </p>
            <p className="font-normal pt-4">
              Parking validation will be available.
            </p>
            <p className="font-normal pt-4">
              For ADA accommodations, please call (XXX) XXX-XXXX at least 72 hours before the meeting.
            </p>
            <p className="font-normal pt-4">
              Materials for the GPA Public Meetings will be available on Thursday, October 17 on this website. Translated materials will be available in Spanish, Chinese (Simplified), and Chinese (Traditional). 
            </p>
            <p className="font-normal pt-4">
              Interpretation will be provided at the Public Meetings in Spanish, Cantonese, Mandarin, and Taishanese. <br></br>
            </p>
            <p className="font-normal pt-4">
              If you wish to receive plan and meeting notifications, please sign up by selecting your preferred language on the right-hand side of the page under “Sign up to receive LASHP General Plan Amendment information.” 
            </p>
          </div>`
)