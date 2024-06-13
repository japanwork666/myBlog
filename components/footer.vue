<template>
    <div class="footer">
        <div>
            <h4>Home</h4>
        </div>
        <div class="main-footer-container">
            <div class="footer-above">
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
.footer {
    background-color: black;
    color: #ffffff;
    height: 40vh;
    padding: 60px;
}

.main-footer-container {
    border-top: 1px solid #A6A6A6;
    border-bottom: 5px solid #A6A6A6;
    padding: 70px 0px;
}

.footer-above {
    display: flex;
    justify-content: space-between;
    padding: 40px 0px;

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
</style>