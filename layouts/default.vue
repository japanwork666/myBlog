<template>
    <div class="DefaultLayout">
        <header>
            <div class="Banner-container">
                <div class="Banner">
                    <div>Digital Garage</div>
                    <nav>
                        <ul class="Banner-mid">
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Business</a></li>
                            <li><a href="#">Sustainability</a></li>
                            <li><a href="#">News</a></li>
                            <li><a href="#">Portal</a></li>
                            <li><a href="#">IR</a></li>
                            <li><a href="#">Career</a></li>
                        </ul>
                    </nav>
                    <div class="language">JP</div>
                    <div class="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div class="mobile-select">
                <nav>
                    <ul>
                        <li><a href="#">Company</a></li>
                        <li><a href="#">Business</a></li>
                        <li><a href="#">Sustainability</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Portal</a></li>
                        <li><a href="#">IR</a></li>
                        <li><a href="#">Career</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        <slot />
        <Footer />
    </div>
</template>

<style lang="scss" scoped>
* {
    margin: 0px;
    padding: 0px;
}

.DefaultLayout {
    background-color: #F1F1F1;
    width: 100%;

    header {
        position: sticky;
        top: 0px;

        .Banner-container {
            padding: 20px 30px 10px;


            .Banner {
                box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
                border-radius: 8px;
                padding: 10px 40px;
                font-size: 16px;
                background-color: #fff;
                opacity: 0.7;
                display: flex;
                align-items: center;


                nav {
                    margin: auto;

                    .Banner-mid li {
                        display: inline;
                        margin-right: 2vw;
                        list-style: none;

                        a {
                            text-decoration: none;
                            color: black;
                        }
                    }


                }

                .language {
                    border: 1px solid black;
                    border-radius: 50%;
                    padding: 7px;
                    width: 20px;
                    height: 20px;
                    display: flex;
                    align-items: center;
                }

                .hamburger {
                    border: 1px solid rebeccapurple;
                    height: 20px;
                    width: 20px;
                    padding: 7px;
                    border-radius: 50%;
                    position: relative;
                }

                .hamburger span {
                    height: 2px;
                    width: 33%;
                    background-color: #6e6666;
                    border-radius: 25px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    transition: .3s ease;
                }

                .hamburger span:nth-child(1) {
                    top: 37%;
                }

                .hamburger span:nth-child(3) {
                    top: 63%;
                }

                .hamburger.active span:nth-child(1) {
                    top: 53%;
                    transform: translate(-50%, -50%) rotate(45deg);
                }

                .hamburger.active span:nth-child(2) {
                    opacity: 0;
                }

                .hamburger.active span:nth-child(3) {
                    top: 47%;
                    transform: translate(-50%, 50%) rotate(-45deg);
                }


            }
        }

        .mobile-select {
            height: 80vh;
            display: none;
            box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
            border-radius: 8px;
            padding: 10px 40px;
            font-size: 16px;
            background-color: #fff;
            opacity: 0.7;
            margin: 0px 30px;

            nav {
                >ul {
                    >li {
                        list-style: none;
                        border-bottom: 1px solid #6e6666;
                        height: 5vh;
                        display: flex;
                        align-items: center;

                        >a {
                            text-decoration: none;
                            color: black;
                        }
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 375px) {
    header {

        .mobile-select {}
    }

    .Banner-mid {
        display: none;
    }

    .hamburger {
        border: 2px solid pink;
    }
}

@media screen and (max-width: 768px) {
    header {

        .mobile-select {}
    }

    .Banner-mid {
        display: none;
    }

}

@media screen and (max-width: 1200px) {}
</style>
<script>
export default {

    mounted() {
        const hamburger = document.querySelector('.hamburger');
        const mobileSelect = document.querySelector('.mobile-select');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileSelect.style.display = mobileSelect.style.display === "block" ? "none" : "block";
        });




    }
}
</script>
