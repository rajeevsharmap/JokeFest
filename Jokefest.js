document.querySelector('.joke-request').addEventListener('click', async () => {
    const jokeDisplay = document.querySelector('.jokeDisplayBox');
    jokeDisplay.innerHTML = '';
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any');
        if (!response.ok) throw new Error(`Request Failed to connect with Server, ${response.status}`);
        const data = await response.json();
        console.log(data);

        if (data.type === "single") {
            jokeDisplay.innerHTML =
                `
                    <div class="jokeSummary">
                        <div class="selectedCategory">
                            <div class ="category1">${data.category}</div>
                            <div class ="category2">${data.type}</div>
                            </div>
                            <div class="single">😂</div>
                            <div class="joke">${data.joke}</div>
                        <div class="Joke__Nav">
                            <div class="jokeId">JokeId: #${data.id}</div>
                            <div class="JokeLike">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
                                LIKE
                            </div>
                            <div class="jokeShare">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-200q0-17-11.5-28.5T680-240q-17 0-28.5 11.5T640-200q0 17 11.5 28.5T680-160ZM200-440q17 0 28.5-11.5T240-480q0-17-11.5-28.5T200-520q-17 0-28.5 11.5T160-480q0 17 11.5 28.5T200-440Zm508.5-291.5Q720-743 720-760t-11.5-28.5Q697-800 680-800t-28.5 11.5Q640-777 640-760t11.5 28.5Q663-720 680-720t28.5-11.5ZM680-200ZM200-480Zm480-280Z"/></svg>
                                SHARE
                            </div>
                        </div>
                    </div>
                    `
        }
        else if (data.type === "twopart") {
            jokeDisplay.innerHTML =
                `
                        <div class="jokeSummary">
                            <div class="selectedCategory">
                                <div class ="category1">${data.category}</div>
                                <div class ="category2">${data.type}</div>
                            </div>
                            <div class="SetUp-Wrapper">
                                <div class="SetUp">
                                    <div>🤔</div>
                                    <strong>Setup:</strong> 
                                </div>
                                <div class='jokeSetUp'>
                                    ${data.setup}
                                </div>
                            </div>
                            <div class="Delivery-Wrapper">
                                <div class="Delivery">
                                    <div>🤣</div>
                                    <strong>Delivery:</strong>
                                </div>
                                <div class='jokeDelivery'>
                                    ${data.delivery}
                                </div>
                            </div>
                            <div class="Joke__Nav">
                                <div class="jokeId">JokeId: #${data.id}</div>
                                <div class="JokeLike">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
                                    LIKE
                                </div>
                                <div class="jokeShare">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-200q0-17-11.5-28.5T680-240q-17 0-28.5 11.5T640-200q0 17 11.5 28.5T680-160ZM200-440q17 0 28.5-11.5T240-480q0-17-11.5-28.5T200-520q-17 0-28.5 11.5T160-480q0 17 11.5 28.5T200-440Zm508.5-291.5Q720-743 720-760t-11.5-28.5Q697-800 680-800t-28.5 11.5Q640-777 640-760t11.5 28.5Q663-720 680-720t28.5-11.5ZM680-200ZM200-480Zm480-280Z"/></svg>
                                    SHARE
                                </div>
                            </div>
                        </div>
                    `;
        }
    }
    catch (error) {
        jokeDisplay.innerHTML = `<p class='error'>Error Handled , Try later <br> ${error.message}<p>`;
    }
})