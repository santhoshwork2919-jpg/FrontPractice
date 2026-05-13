// today i learn about JSON and fetchAPI

async function getcatfact()
{
    let fact = await fetch("https://catfact.ninja/fact");
    let textformat = await fact.json();
    console.log(textformat);
}

getcatfact();