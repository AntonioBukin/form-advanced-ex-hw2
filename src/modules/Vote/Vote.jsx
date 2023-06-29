import { Component } from "react";

import VoteBlock from "./VoteBlock/VoteBlock";

import VoteActions from "./VoteActions/VoteActions";
import VoteResult from "./VoteResult/VoteResult";

import styles from "./vote.module.scss"

class Vote extends Component {
    state = {
        republicans: 0,
        democrats: 0,
    }

    calcTotal() {
        const {republicans, democrats} = this.state;
        const total = republicans + democrats;
        return total;
    }

    calcPercent(name) {
        const value = this.state[name];//this.state['democrats']
        const total = this.calcTotal();
        if(!total) {
            return 0;
        }

        const result = Math.round((value / total) * 100);
        return result;
    }

        leaveVote = (name) => {
            this.setState(prevState => {
                return {
                    [name]: prevState[name] + 1}
            })
    }
     

        render() {
            const total = this.calcTotal();

        const democratesPercent = this.calcPercent("democrats");
        const republicansPercent = this.calcPercent("republicans");

        return (
            <div className={styles.wrapper}>
                <VoteBlock title="Leave your vote">
                    <VoteActions leaveVote={this.leaveVote}/>
                </VoteBlock>
                <VoteBlock title="Result">
                    <VoteResult total={total} democratesPercent={democratesPercent} republicansPercent={republicansPercent}/>
                    </VoteBlock>
                
            </div>
        )
    }
}


export default Vote;