import '../../styles/components/home.css';

// TODO: Remove local images and use a CDN
//Images
import gradientImg from '../../assets/green-bg.png'
import challengesImg from '../../assets/challenges-logo.png'
import medalIcon from '../../assets/medal-icon.png'
import userImg from '../../assets/user3-img.png'
import crownImg from '../../assets/crown.png'
import secondUserImg from '../../assets/user2-img.png'
import iconUp from '../../assets/green-icon.png'
import thirdUserImg from '../../assets/user1-img.png'
import iconDown from '../../assets/red-icon.png'
import leaderboardIcon from '../../assets/leaderboard-icon.png'
import recyclableItemsBg from '../../assets/bottle-img.png'
import meghaphoneIcon from '../../assets/megaphone-icon.png'
import accountIcon from '../../assets/account-icon.png'
import chevronIcon from '../../assets/chevron-icon.png'
import plusIcon from '../../assets/plus-icon.png'


export default function Home() {
    return (
    <main id="home">

        <div id="gradientContainer">
            <img src={gradientImg} alt="" />
        </div>

        <section id="homeUserGreeting">
            <img src={userImg} alt="" />
            <div id='userGreeting'>
                <p><span>Hello Yesid!</span></p>
                <p>Welcome back</p>
            </div>
        </section>

        <section id="homeChallenges">
            <div>
                <img src={challengesImg} alt="" />
            </div>
            <div>
                <h2>Challenges</h2>
                <p>Join to challenges and earn points</p>
            </div>

            <div className="continueBtn">
                <img src={chevronIcon} alt="" />
            </div>            
        </section>

        <article id="homeTopUsers">
            <header>
                <h2>Weekly Top users</h2>
                <img src={medalIcon} alt="" />
            </header>
            <section id='topUsersList'>
                <ul>
                    <li>
                        <div>
                            <img src={iconUp} alt="" />
                            <p>2</p>
                        </div>
                        <div>
                            <img src={secondUserImg} alt="" />
                        </div>
                        <div>
                            <h3>Juliana</h3>
                            <p>@star93</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={crownImg} alt="" />
                        </div>
                        <div>
                            <img src={userImg} alt="" />
                        </div>
                        <div>
                            <h3>Yesid M</h3>
                            <p>@devgoat___</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src={iconDown} alt="" />
                            <p>3</p>
                        </div>
                        <div>
                            <img src={thirdUserImg} alt="" />
                        </div>
                        <div>
                            <h3>Ace</h3>
                            <p>@chickenLittle</p>
                        </div>
                    </li>
                </ul>
            </section>
        </article>

        <section id='homeLeaderboard'>
            <div>
                <img src={leaderboardIcon} alt="" />
            </div>
            <h2>Leaderboard</h2>
            <div className="continueBtn">
                <img src={chevronIcon} alt="" />
            </div>
        </section>

        <section id="homeRecyclableItems">
            <img src={recyclableItemsBg} alt="" /> 
                <h2>Explore recyclable items <span><img src={chevronIcon} alt="" /></span></h2>
            <div id='gradientBg'>gradient</div>
        </section>

        {/* TODO: Change images to icons */}

        <nav id="homeBottomNav">
            <ul>
                <div>
                    <img src={meghaphoneIcon} alt="" className="bottomNavIcon" />
                    <p>News</p>
                
                </div>
                <div>
                    <li>
                        <img src={plusIcon} alt="" />
                    </li>
                </div>
                <div>
                    <img src={accountIcon} alt="" className="bottomNavIcon" />
                    <p>Profile</p>
                </div>
            </ul>
        </nav>
    </main>
    )
}