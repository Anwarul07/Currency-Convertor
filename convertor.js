console.log("Welcome to currency Converting");


const populate = async (value, currency) => {
    url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_UuuFEXsnVGwPcIk3Fry6Btp6HMSLWldutE5FA9Wk&base_currency="

    let response = await fetch(url);
    let rjson = await response.json();
    console.log(rjson)

    const tablebody = document.querySelector("tbody");
    tablebody.innerHTML = `
<tr>
  <td>Data1 </td>
  <td>Data2</td>
  <td>Data3</td>
</tr>`
}

const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("button is clicked")

    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='currency']").value

    populate(value, currency);
})
