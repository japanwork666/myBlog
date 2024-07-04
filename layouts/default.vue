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
                    <div class="hamburger">hamburger</div>
                </div>
            </div>
        </header>
        <slot />
        <Footer />
    </div>
</template>

<style lang="scss">
* {
    margin: 0px;
    padding: 0px;
}

.DefaultLayout {
    background-color: #F1F1F1;
    width: 100%;

    header {
        .Banner-container {
            padding: 30px 40px;

            .Banner {
                box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
                border-radius: 8px;
                padding: 10px 40px;
                font-size: 16px;
                background-color: #fff;
                position: sticky;
                top: 15px;
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

                .hamburger {}
            }
        }
    }
}

@media (max-width: 375px) {
    .hamburger {
        display: block;
        background-color: greenyellow;
    }
}
</style>
