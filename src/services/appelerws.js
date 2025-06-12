// services/api.js
export async function getPoids() {

  console.log ("function getPoids")
  const response = await fetch('https://ux2rpnl130.execute-api.eu-north-1.amazonaws.com/balance/recupererpoids');

  console.log ("function getPoidsapresscall")
  if (!response.ok) throw new Error("Erreur réseau");
  return await response.json();
}