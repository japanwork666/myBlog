<template>
    <div class="footer bg-black text-[#ffffff] h-[40%] p-[60px]">
        <div>
            <h4>Home</h4>
        </div>
        <div class="main-footer-container pt-[70px] pb-[70px] mobile:h-[70vh]">
            <div class="footer-above flex justify-between pt-[40px] pb-[40px] mobile:flex-col items-center">
                <div>DigitalGarage</div>
                <button class="px-[50px] py-[13px] rounded-[20px] cursor-pointer bg-transparent border border-white text-white mobile:mt-[10px]">Contact</button>
            </div>
            <div class="footer-below flex mobile:flex-col">
                <div class="footer-item w-0 flex-grow">
                    <h4 class="mb-[15px] text-[#A6A6A6]">Company</h4>
                    <ul class="list-none mobile:hidden">
                        <li class="mb-[10px]"><a class="no-underline text-white" href="#">Company</a></li>
                        <li class="mb-[10px]"><a class="no-underline text-white" href="#">Business</a></li>
                        <li class="mb-[10px]"><a class="no-underline text-white" href="#">Sustainbility</a></li>
                        <li class="mb-[10px]"><a class="no-underline text-white" href="#">News</a></li>
                        <li class="mb-[10px]"><a class="no-underline text-white" href="#">Business</a></li>
                        <li class="mb-[10px]"><a class="no-underline text-white" href="#">Sustainbility</a></li>
                        <li class="mb-[10px]"><a class="no-underline text-white" href="#">News</a></li>
                    </ul>
                </div>
                <div class="footer-item w-0 flex-grow">
                    <h4 class="mb-[15px] text-[#A6A6A6]">Business</h4>
                    <ul class="list-none mobile:hidden">
                        <li class="mb-[10px]"><a class="no-underline text-white" href="#">Company</a></li>
                        <li class="mb-[10px]"><a class="no-underline text-white" href="#">Business</a></li>
                        <li class="mb-[10px]"><a class="no-underline text-white" href="#">Sustainbility</a></li>
                        <li class="mb-[10px]"><a class="no-underline text-white" href="#">News</a></li>
                    </ul>
                </div>
                <div class="footer-item w-0 flex-grow">
                    <h4 class="mb-[15px] text-[#A6A6A6]">Sustainbility</h4>
                    <ul class="list-none mobile:hidden">
                        <li class="mb-[10px]"><a class="no-underline text-white" href="#">Company</a></li>
                        <li class="mb-[10px]"><a class="no-underline text-white" href="#">Business</a></li>
                        <li class="mb-[10px]"><a class="no-underline text-white" href="#">Sustainbility</a></li>
                        <li class="mb-[10px]"><a class="no-underline text-white" href="#">News</a></li>
                    </ul>
                </div>
                <div class="footer-item w-0 flex-grow">
                    <h4 class="mb-[15px] text-[#A6A6A6]">News</h4>
                    <ul class="list-none mobile:hidden">
                        <li class="mb-[10px]"><a class="no-underline text-white" href="#">Company</a></li>
                        <li class="mb-[10px]"><a class="no-underline text-white" href="#">Business</a></li>
                        <li class="mb-[10px]"><a class="no-underline text-white" href="#">Sustainbility</a></li>
                        <li class="mb-[10px]"><a class="no-underline text-white" href="#">News</a></li>
                    </ul>
                </div>
                <div class="footer-item w-0 flex-grow">
                    <h4 class="mb-[15px] text-[#A6A6A6]">DG Investor Relations</h4>
                    <ul class="list-none mobile:hidden">
                        <li class="mb-[10px]"><a class="no-underline text-white" href="#">Career</a></li>
                        <li class="mb-[10px]"><a class="no-underline text-white" href="#">Business</a></li>
                        <li class="mb-[10px]"><a class="no-underline text-white" href="#">Sustainbility</a></li>
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

    }
}

.footer-below {

}

.footer-item {


    h4 {

    }

    ul {

        li {

            a {


            }
        }

    }
}

@media screen and (max-width: 375px) {
    .footer {
        .main-footer-container {

            .footer-above {

                button {

                }
            }

            .footer-below {


                .footer-item {
                    >ul {

                    }
                }
            }
        }
    }
}

@media screen and (max-width: 768px) {}

@media screen and (max-width: 1200px) {}
</style>