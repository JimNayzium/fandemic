<script>
    import { dues } from '$lib/utils/helper';
    let one, oneOne, oneOneOne, oneTwo, oneTwoOne, oneTwoTwo, oneTwoThree, oneTwoFour, oneTwoFive, oneTwoSix, oneThree;
    let two, twoOne, twoTwo, twoThree;
    let three, threeOne;
    let four, fourOne, fourTwo;
    let five, fiveOne;
    let six, sixOne, sixTwo, sixThree, sixFour;
    let seven, sevenOne, sevenTwo, sevenThree, sevenFour;
    let eight, eightOne, eightTwo;

    const goToSection = (section) => {
        const top = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({left: 0, top, behavior: 'smooth'});
    }
</script>

<style>
    .constitution {
        position: relative;
        z-index: 1;
        width: 92%;
        max-width: 800px;
        margin: 8em auto 10em;
    }

    h1 {
        font-size: 2em;
        line-height: 1.2em;
        text-align: center;
        margin: 2em 0 1.5em;
    }

    h2 {
        font-size: 1.5em;
        line-height: 1.2em;
    }

    h3 {
        text-decoration: underline;
        font-size: 1.3em;
        line-height: 1.2em;
    }

    h4 {
        text-decoration: underline;
        margin-left: 2em;
        font-size: 1.2em;
        line-height: 1.2em;
    }

    h5 {
        margin-left: 6em;
        font-size: 0.8em;
        line-height: 1.1em;
    }

    .subBlock {
        margin-left: 2.4em;
    }

    .sectionHeading {
        margin: 4em 0 1.5em;
    }

    .subSectionHeading {
        margin: 1.5em 0 1.5em;
    }

    .underscore {
        text-decoration: underline;
    }

    .right {
        text-align: right;
    }

    .positionMaximums td {
        min-width: 3em;
    }

    .noUnderscore {
        text-decoration: none;
    }

    .clickable {
        cursor: pointer;
    }

    .clickable:hover {
        color: #00316b;
    }

    p {
        color: #777;
    }
</style>

<div class="constitution">
    <h1 class="noUnderscore">DYNASTY DOGS CONSTITUTION</h1>
    
    <h2 class="noUnderscore">ARTICLES OF THE CONSTITUTION</h2>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(one)}>Article 1: Roster</h3>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneOne)}>1.1 Positional Breakdown</h4>
            <h5 class="noUnderscore clickable" on:click={() => goToSection(oneOneOne)}>1.1.1 Position Maximums</h5>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneTwo)}>1.2 Trading</h4>
            <h5 class="noUnderscore clickable" on:click={() => goToSection(oneTwoOne)}>1.2.1 Trade Collusion</h5>
            <h5 class="noUnderscore clickable" on:click={() => goToSection(oneTwoTwo)}>1.2.2 Lending Players Prohibition</h5>
            <h5 class="noUnderscore clickable" on:click={() => goToSection(oneTwoThree)}>1.2.3 Trade Deadline</h5>
            <h5 class="noUnderscore clickable" on:click={() => goToSection(oneTwoFour)}>1.2.4 Trade Restrictions</h5>
            <h5 class="noUnderscore clickable" on:click={() => goToSection(oneTwoFive)}>1.2.5 Veto/Trade Process</h5>
            <h5 class="noUnderscore clickable" on:click={() => goToSection(oneTwoSix)}>1.2.6 Conditional Trades</h5>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(oneThree)}>1.3 Waiver Wire</h4>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(two)}>Article 2: Drafting</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(twoOne)}>2.1 Draft Order</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(twoTwo)}>2.2 Rookie Drafts</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(twoThree)}>2.3 Draft Day Trades</h4>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(three)}>Article 3: Scoring System</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(threeOne)}>3.1 Voting on Scoring System</h4>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(four)}>Article 4: Postseason</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fourOne)}>4.1 Playoffs</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fourTwo)}>4.2 Playoff Tiebreakers</h4>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(five)}>Article 5: Tanking Policy</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(fiveOne)}>5.1 League Tanking Policy</h4>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(six)}>Article 6: Replacing Managers</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixOne)}>6.1 Removing Managers</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixTwo)}>6.2 Replacing Managers</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixThree)}>6.3 Replacement Incentive</h4>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(seven)}>Article 7: League Finances</h3>
    
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sevenOne)}>7.1 League Dues</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixTwo)}>7.2 Payout</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixThree)}>7.3 Last Place Punishment</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(sixFour)}>7.4 Raising Dues</h4>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(eight)}>Article 8: Miscellaneous Rules</h3>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(eightOne)}>8.1 User Errors</h4>
        <h4 class="noUnderscore clickable" on:click={() => goToSection(eightTwo)}>8.2 Manager Availability</h4>
    
    <hr />
    
    <h2 class="sectionHeading" bind:this={one}>Article 1 Roster Breakdown</h2>
    
    <h3 class="subSectionHeading" bind:this={oneOne}>1.1 Positional Breakdown</h3>
    
    <p>23 Total Players not including IR or Taxi Squad</p>
    
    <p class="underscore">Starters</p>
    <ul>
        <li>QB</li>
        <li>RB</li>
        <li>RB</li>
        <li>WR</li>
        <li>WR</li>
        <li>WR</li>
        <li>TE</li>
        <li>FLEX (RB/WR/TE)</li>
        <li>FLEX (RB/WR/TE)</li>
        <li>SUPERFLEX (QB/RB/WR/TE)</li>
    </ul>
    
    <p>13 Bench</p>

    <p>4 Taxi Squad Spots (Player with 1 or more years of experience in the NFL must be activated from the Taxi Squad)</p>
    
    <p>3 IR Spots (Player must be labeled as IR, PUP, or COVID in the Sleeper App)</p>
    
    <p>Roster settings will never change without a majority league vote (6/10) and cannot be changed mid-season</p>
    
        <h4 bind:this={oneOneOne}>1.1.1 Position Maximums</h4>
        
        <div class="subBlock">
            <table class="positionMaximums">
                <tr><td>QB</td><td class="right">6 active, 9 total</td></tr>
                <tr><td>RB</td><td class="right">20</td></tr>
                <tr><td>WR</td><td class="right">20</td></tr>
                <tr><td>TE</td><td class="right">10</td></tr>
            </table>
        </div>


    <h3 class="subSectionHeading" bind:this={oneTwo}>1.2 Trading</h3>
    
    <p>Trading of players and draft picks (up to 3 drafts away) are allowed. Trades will process immediately and will be reversed if vetoed or under investigation for collusion. Tradable assets include players, draft picks, and FAAB $.</p>
    
    <h4 bind:this={oneTwoOne}>1.2.1 Trade Collusion</h4>
    <div class="subBlock">
        <p>If any owners are suspected of accepting bribes/offering bribes to enhance their/another owners team via trade, trading any assets other than fantasy players, draft picks, FAAB $, or otherwise found guilty of engaging in any form of collusion*, all parties involved in the trade will be susceptible to punishment. The punishments will go as followed:</p>
        
        <ul>
            <li>First Offense – Immediate reduction of FAAB budget by 80%</li>
            <li>Second Offense – Immediate freeze on all transaction types for the next 18 weeks of regular season and playoff fantasy football games, including trades and waiver wire bids</li>
            <li>Third Offense – A league meeting of all members not involved in any of the improper trades/activity in question will take place to discuss next steps.</li>
        </ul>

        <p>All trades that are found guilty of collusion, will be reversed/denied. If the trade had affected the outcome of previous games, the results of those games will be revised.  </p>

        <p>*Collusion includes the organizing of veto votes against an acceptable trade.</p>

        <p>The commissioner will err on the side of letting owners manage their teams the way they see fit. Any collusion will need to be clear. The commissioner reserves the right to step in and at the very least assess the thinking of any team involved in a heavily lop-sided trade. Two co-commissioners have been assigned to review transactions involving the head commissioner.</p>
    </div>

    <h4 bind:this={oneTwoTwo}>1.2.2 Lending Players Prohibition</h4>
    <div class="subBlock">
        <p>Any player traded from a team may not be re-acquired via trade within 6 weeks of the original trade. Any teams involved in this behavior will be subject to the aforementioned collusion punishments.</p>
    </div>
    
    <h4 bind:this={oneTwoThree}>1.2.3 Trade Deadline</h4>
    <div class="subBlock">
        <p>The trade deadline will be set before kickoff of last game of week 11.</p>
    </div>
    
    <h4 bind:this={oneTwoFour}>1.2.4 Trade Restrictions</h4>
    <div class="subBlock">
        <p>You will not be able to trade draft picks that are more than 3 drafts away. For example, during the 2021 season you cannot trade any picks in or after the 2025 draft. You may only trade FAAB $ from the current season.</p>
    </div>
    
    <h4 bind:this={oneTwoFive}>1.2.5 Veto/Trade Process</h4>
    <div class="subBlock">
        <p>A total of 6 veto votes are required to veto a trade. Vetoes are only appropriate in instances of collusion or an egregious mismatch of value (i.e. CMC for a backup WR). Not liking a trade does not warrant a veto.</p>
    </div>
    
    <h4 bind:this={oneTwoSix}>1.2.6 Conditional Trades</h4>
    <div class="subBlock">
        <p>Details of conditional trades must be submitted to the commissioner in order to document and track conditions and conditional trade pieces. Draft picks, current season FAAB, and players are allowed assets to be included in conditional trades. Only draft picks up to 1 draft away can be traded when conditions are set. Any conditional picks, players or FAAB must be owned by the trading parties for the entire length of the condition.  Conditional trades cannot be used as a form of bench sharing or player rentals. Articles 1.2.1 and 1.2.2 must be adhered to when doing conditional trades. </p>
        
              <p>Examples of conditional trades:</p>
        <ol>
             <li>During the 2022 season, John trades his 2023 1st round pick for Ferd's CMC. John and Ferd agree if the future 1st round pick is NOT a top 3 pick, Ferd also gets John's 2023 3rd round pick.</li>
             <li>During the 2023 off-season, Joey trades his 2023 4nd round pick for Sean's Gronkowski.  Joey and Sean agree if Gronk is signed to an NFL the night before the 2023 Rookie draft, the trade is reversed.</li>
             <li>During the 2022 season, Jonathan trades away Zach Ertz who iss currently on IR to Jerrid for a 2023 3rd round pick. Jonathan and Jerrid agree if Ertz is not back from IR before Week 10 that the 2023 3rd round pick will be upgraded to a 2023 2nd round pick plus Jonathan will give $5 FAAB to Jerrid.</li>
        </ol>
        
        <p>These are a few examples of things that cannot be done with conditional pieces:</p>
        <ol>
             <li>Conditional players cannot be dropped or traded away before the agreed conditional cutoff time is met.</li>
             <li>All FAAB cannot be spent if FAAB was the conditional piece.</li>
             <li>Conditional picks cannot be traded away before the agreed conditional cutoff time is met.</li>
        </ol>

    </div>
    
    
    <h3 bind:this={oneThree}>1.3 Waiver Wire</h3>
    
    <p>FAAB Waiver wire system. Each team will begin the season with $100. $0 bids are allowed. Bids will process Tuesday night / Wednesday Morning 12AM PST / 2AM CST / 3AM EST.</p>

    <p>FAAB budgets will reset each season after the Championship game.</p>
    
    
    <h2 class="sectionHeading" bind:this={two}>Article 2 Drafting</h2>
    
    <h3 bind:this={twoOne}>2.1 Draft Order</h3>
    <p>Starting 2024 Rookie Draft and onward: The draft order each year will be a linear draft in the following order:</p>
   
    <ol>
        <li>1st Least in Max Points For (non-Playoff team)</li>
        <li>2nd Least in Max Points For (non-Playoff team)</li>
        <li>3rd Least in Max Points For (non-Playoff team)</li>
        <li>4th Least in Max Points For (non-Playoff team)</li>
        <li>1st Least in Max Points between the 5th & 6th Seed Playoff Teams</li>
        <li>2nd Least in Max Points between the 5th & 6th Seed Playoff Teams</li>
        <li>4th Place Finisher</li>
        <li>3rd Place Finisher</li>
        <li>2nd Place Finisher</li>
        <li>League Champion</li>
    </ol>
    
    <p>2021 Season and 2022 Rookie Draft: A mistake was made during the inaugural season. Draft order for positions 5-10 were based off playoff season standings while positions 1-4 were based off regular season standings. Draft order was not corrected based on Article 2.1 as 2022 draft pick trades had already been exchanged via trades before the Dynasty Dog Constitution was drafted. Starting the 2022 season Article 2.1 is in full effect.</p>
    
    <p>2022 Season and 2023 Rookie Draft: Draft order for positions 5-10 were based off playoff season standings while positions 1-4 were based off regular season standings. League voted during 2022 Season to institute new draft order rules starting the 2023 season.</p>
    
    <h3 bind:this={twoTwo}>2.2 Rookie Drafts</h3>
    <p>Rookie drafts will consist of 4 rounds of drafting, with 8 hours alotted for each pick. Players can be moved into the taxi squad until the regular season start of week 1. Once deadline passes, players may no longer be moved into the taxi squad.</p>
    <p>Any spots not filled during the draft, can be filled immediately afterwards from the waiver wire.</p>
    
    <h3 bind:this={twoThree}>2.3 Draft Day Trades</h3>
    <p>If a trade is being made during the draft, one or both parties can alert the commissioner to pause the draft to allow for extra time to negotiate the trade.</p>
    
    <h2 class="sectionHeading" bind:this={three}>Article 3 Scoring System</h2>

    <h3 bind:this={threeOne}>3.1 Scoring System</h3>
    <p>The league scoring system breakdown is listed on the Sleeper fantasy app (for the most part, it follows typical .5PPR Scoring but with a 1PPR Scoring for the TEs). The scoring system will never change without a majority league vote (6/10) and cannot change mid-season.</p>
    
    <h2 class="sectionHeading" bind:this={four}>Article 4 Postseason</h2>
    
    <h3 bind:this={fourOne}>4.1 Playoffs</h3>
    <p>At the end of the season 6 teams will make the playoffs. The first round of playoffs will commence in week 15. The top 6 teams in the standings, will receive a playoff berth. The 2 teams with the best season record will receive a bye week in the first round of the playoffs. Each playoff matchup will only last one week and the winner will advance. Week 18 will not be used.</p>
    
    <h3 bind:this={fourTwo}>4.2 Seeding Tiebreakers</h3>
    <p>If two teams finish with the same record the tiebreakers will go as followed:</p>

    <ol>
        <li>Most Points For</li>
        <li>Winner of Head 2 Head Record</li>
        <li>Most Total Points Against</li>
        <li>Winner of the Coin Flip</li>
        <li>Survivor in a duel to the death</li>
    </ol>

    <h2 class="sectionHeading" bind:this={five}>Article 5 Tanking Policy</h2>
    
    <h3 bind:this={fiveOne}>5.1 League Tanking Policy</h3>
    <p>No team may intentionally leave starting roster spots empty or start ineligible players. Ineligible players include players with the following statuses: IR, Suspended, or free agents. Any evidence of intentionally leaving roster spots empty or starting ineligible players in order to improve your draft position may be subject to punishment, including but not limited to the forfeiture of draft selections.</p>

    <h2 class="sectionHeading" bind:this={six}>Article 6 Replacing Managers</h2>
    
    <h3 bind:this={sixOne}>6.1 Removing Managers</h3>
    <p>Short of continuously failing to set a valid lineup, or confirmed collusion, no manager can be removed against their will. Participation, through the league text chat, trade offers, and the waiver wire, is strongly encouraged but generally not grounds for removal.</p>
    
    <h3 bind:this={sixTwo}>6.2 Replacing Managers</h3>
    <p>When a manager needs to be replaced, the commissioner will try to find a suitable candidate with some connection to at least a portion of the existing managers. Priority will be placed on managers who are eager to take on a dynasty commitment and will be very active within the league.</p>
    
    <h3 bind:this={sixThree}>6.3 Replacement Incentive</h3>
    <p>In the event that a manager chooses to quit the league or is removed by a comissioner, an incoming manager is offered a 50% reduction on their first year buy-in.</p>

    <h2 class="sectionHeading" bind:this={seven}>Article 7 League Finances</h2>
    
    <h3 bind:this={sevenOne}>7.1 League Dues</h3>
    <p>League dues are set at {dues}$. Dues are collected through <a href="https://www.paypal.com/paypalme/CorgiKohmander">Paypal</a>, <a href="https://www.venmo.com/u/CorgiKoh">Venmo</a> [preferred] or Zelle (via my cell#) and collection will be sent out no later than the first of August. All managers must be fully paid up before the start of regular season. In the event that a manager fails to pay before the deadline, a 10% penalty will be addd to their payment and will go towards the payouts at the end of the year.</p>
    
    <h3 bind:this={sevenTwo}>7.2 Payout</h3>
    <p>League payout is structured as follows:</p>
    <ul>
        <li>1st place: {dues * 7}$</li>
        <li>2nd place: {dues * 2}$</li>
        <li>3rd place: {dues}$</li>
    </ul>
    <p>In the event that a manager was fined due to late payment, their extra fee will be added to the 1st place winner's payout. Similarly, if new managers comes into the league and the payout is smaller, the difference will come out of the 1st place winner's prize.</p>
    
     <h3 bind:this={sevenThree}>7.4 Last Place Punishment</h3>
    <p>The manager who finishes with the worst regular season record is required to pay the fee to upgrade the Dynasty Dog Trophy for the 1st place winner. The current cost is $12 for engraving plus any taxes and shipping(as of 2022 total was $16.34). The link to purchase the engraved name plate can be found <a href="https://www.fantasychamps.com/products/engraved-name-plate-black-gold/">HERE</a>.</p>   
    
    <p>If two teams finish with the same losing record the tiebreakers will go as followed:</p>
    
    <ol>
        <li>Least Points For</li>
        <li>Loser of Head 2 Head Record</li>
        <li>Least Total Points Against</li>
        <li>Loser of the Coin Flip</li>
        <li>Loser in a duel to the death</li>
    </ol>
    
    <h3 bind:this={sevenFour}>7.4 Raising Dues</h3>
    <p>A majority vote (6/10) is required in order to raise league dues. In the event that a manager is no longer financially comfortable with the buyin, finding a co-manager to split the cost should be explored first before Article 6.2: Replacing Managers is initiated.</p>

     <h2 class="sectionHeading" bind:this={eight}>Article 8 Miscellaneous Rules</h2>
    
    <h3 bind:this={eightOne}>8.1 User Errors</h3>
    <p>Managers must contact the commissioner via text or Sleeper DM within 24 hours of any roster drop errors. This will serves as a time stamp for the request. The commissioner will review and process the request. Requests made over 24 hours later will not be honored.</p>
    
    <h3 bind:this={eightTwo}>8.2 Manager Availability</h3>
    <p>Managers must contact the commissioner if they are unable to set their lineup due to unforeseen circumstances including but not limited lack of internet, loss of power, vacation or business travel. It is recommended to assign a co-manager if these events occur often. If specific lineup instructions are not given, the commissioner will set the best available line up based on projected points.</p>
    
</div>
