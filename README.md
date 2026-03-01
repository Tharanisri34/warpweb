## warpweb
> This software is an extension of filewarp Project. It provides web interface for interracting with filewarp to manipulate, convert and analyze files.

## Architecture Overview
### Project Structure
```text
warpweb
├── LICENSE
├── MANIFEST.ini
├── README.md
├── Server
│  ├── core
│  │  ├── __init__.py
│  │  ├── admin.py
│  │  ├── apps.py
│  │  ├── config.py
│  │  ├── forms.py
│  │  ├── migrations
│  │  ├── models.py
│  │  ├── static
│  │  ├── tests.py
│  │  ├── urls.py
│  │  ├── utils.py
│  │  └── views.py
│  ├── manage.py
│  ├── static
│  │  ├── admin
│  │  └── js
│  ├── templates
│  │  └── core
│  └── warpweb
│      ├── __init__.py
│      ├── asgi.py
│      ├── settings.py
│      ├── urls.py
│      └── wsgi.py
├── UI
│  ├── index.html
│  ├── package-lock.json
│  ├── package.json
│  ├── postcss.config.mjs.x
│  ├── public
│  ├── src
│  │  ├── App.jsx
│  │  ├── components
│  │  ├── hooks
│  │  ├── main.jsx
│  │  ├── pages
│  │  ├── store
│  │  ├── styles
│  │  └── utils
│  ├── tailwind.config.js
│  ├── tsconfig.json
│  └── vite.config.js
├── package.json
└── version.txt
```
