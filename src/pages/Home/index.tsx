import React from 'react';

const { ipcRenderer } = window.require('electron');

const Home: React.FC = () => {
  function openAboutPage(): void {
    ipcRenderer.send('open-about-window', 'about');
  }

  return (
    <>
      <h1>Home</h1>
      <button type="button" onClick={openAboutPage}>
        open about page
      </button>
    </>
  );
};

export default Home;
