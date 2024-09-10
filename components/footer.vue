<template>
    <div class="footer bg-black text-[#ffffff] h-[40%] p-[60px]">
        <div>
            <h4>Home</h4>
        </div>
        <div class="main-footer-container pt-[70px] pb-[70px]">
            <div class="footer-above flex justify-between pt-[40px] pb-[40px]">
                <div>DigitalGarage</div>
                <button>Contact</button>
            </div>
            <div class="footer-below">
                <div class="footer-item">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">Company</a></li>
                        <li><a href="#">Business</a></li>
                        <li><a href="#">Sustainbility</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Business</a></li>
                        <li><a href="#">Sustainbility</a></li>
                        <li><a href="#">News</a></li>
                    </ul>
                </div>
                <div class="footer-item">
                    <h4>Business</h4>
                    <ul>
                        <li><a href="#">Company</a></li>
                        <li><a href="#">Business</a></li>
                        <li><a href="#">Sustainbility</a></li>
                        <li><a href="#">News</a></li>
                    </ul>
                </div>
                <div class="footer-item">
                    <h4>Sustainbility</h4>
                    <ul>
                        <li><a href="#">Company</a></li>
                        <li><a href="#">Business</a></li>
                        <li><a href="#">Sustainbility</a></li>
                        <li><a href="#">News</a></li>
                    </ul>
                </div>
                <div class="footer-item">
                    <h4>News</h4>
                    <ul>
                        <li><a href="#">Company</a></li>
                        <li><a href="#">Business</a></li>
                        <li><a href="#">Sustainbility</a></li>
                        <li><a href="#">News</a></li>
                    </ul>
                </div>
                <div class="footer-item">
                    <h4>DG Investor Relations</h4>
                    <ul>
                        <li><a href="#">Career</a></li>
                        <li><a href="#">Business</a></li>
                        <li><a href="#">Sustainbility</a></li>
                    </ul>
                    <div>
                        icon
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.footer {}

.main-footer-container {
    border-top: 1px solid #A6A6A6;
    border-bottom: 5px solid #A6A6A6;
}

.footer-above {


    button {
        padding: 13px 50px;
        border-radius: 20px;
        cursor: pointer;
        background-color: transparent;
        border: 1px solid white;
        color: white;
    }
}

.footer-below {
    display: flex;
}

.footer-item {
    width: 0;
    flex-grow: 1;

    h4 {
        margin-bottom: 15px;
        color: #A6A6A6;
    }

    ul {
        list-style: none;

        li {
            margin-bottom: 10px;

            a {
                text-decoration: none;
                color: white;
            }
        }

    }
}

@media screen and (max-width: 375px) {
    .footer {
        .main-footer-container {
            height: 70vh;

            .footer-above {
                flex-direction: column;
                align-items: center;

                button {
                    margin-top: 10px;
                }
            }

            .footer-below {
                flex-direction: column;

                .footer-item {
                    >ul {
                        display: none;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 768px) {}

@media screen and (max-width: 1200px) {}
</style>