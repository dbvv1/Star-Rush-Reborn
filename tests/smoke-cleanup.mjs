// Cleanup steps are independent so a crashed browser cannot suppress evidence.
export async function cleanupSmoke({browser, server, db}) {
  const errors = [];
  for (const [name, close] of [
    ['browser', async () => { if (browser) await browser.close(); }],
    ['server', async () => {
      if (server.listening) {
        server.closeAllConnections();
        await new Promise((resolve, reject) => server.close(error => error ? reject(error) : resolve()));
      }
    }],
    ['database', async () => db.close()]
  ]) {
    try { await close(); } catch (error) { errors.push(`${name}: ${error.message || error}`); }
  }
  return errors;
}
