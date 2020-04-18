import React from 'react';

export default () => (
  <main>
    <div>
      <h1 className="title"> Adonis 5 + React Works! </h1>
      <p className="subtitle">
        Congratulations, you have just created your first AdonisJS app.
      </p>
      <ul>
        <li>
          {'Backend routes is defined inside '}
          <code>start/routes.ts</code>
          {' file'}
        </li>
        <li>
          {'Frontend routes is definined in '}
          <code>resources/react/app/index.tsx</code>
          {' file'}
        </li>
        <li>
          {'You can update this page by editing '}
          <code>resources/react</code>
          {' file'}
        </li>
        <li>
          Click
          <a href="/demo">{'  here '}</a>
          to check the redux + saga implementation
        </li>
        <li>
          If you run into problems, you can reach us on
          <a href="https://discord.gg/vDcEjq6?">{' Discord '}</a>
          or the
          <a href="https://forum.adonisjs.com/">{' Forum.'}</a>
        </li>
      </ul>
    </div>
  </main>
);
