const loadPhone = async (searchText , isShowAll) => {
    const res = await fetch (`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data
    displayPhones(phones , isShowAll)
}

loadPhone()

const displayPhones = (phones , isShowAll) => {
    
    
    const mainDiv = document.getElementById('phone-container')
        mainDiv.innerHTML = ''
        const btn = document.getElementById('btn-show')
        if(phones.length > 12 && !isShowAll){
            btn.classList.remove('hidden')
        }
        else{
            btn.classList.add('hidden')
        }
        if(!isShowAll){
            phones = phones.slice(0,12);
        }
        
    phones.forEach(phone => {
        const div = document.createElement('div');
        div.classList = 'card  bg-base-100 p-4 shadow-xl'
        div.innerHTML = `
        <figure><img src="${phone.image}" /></figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-center">
            <button onclick="handleShowDetail('${phone.slug}')" class="btn btn-primary">Show details</button>
            </div>
        </div>
        `
        mainDiv.appendChild(div)
    });
    spinnerHandle(false)
} 

const handleShowDetail = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data = await res.json();


    console.log(data);
}

const searchPhone = (isShowAll) => {
    spinnerHandle(true)
    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value ;
    // console.log(searchValue);
   
    loadPhone(searchValue , isShowAll);

}

const spinnerHandle = (isLoading) => {
    const loader = document.getElementById('spinner-container');
if(isLoading){
    loader.classList.remove('hidden')
}
else{
    loader.classList.add('hidden')
}
   
}

const handleShow = () => {
    searchPhone(true);
}











