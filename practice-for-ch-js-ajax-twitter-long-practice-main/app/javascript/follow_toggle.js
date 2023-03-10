import { API, broadcast } from "./util";

export default class FollowToggle {
  constructor(toggleButton) {
    // Your code here
    this.toggleButton = toggleButton;
    this.handleClick = this.handleClick.bind(this);
    // this.followState = this.followState(this.toggleButton.getAttribute('data-follow-state'))
    // this.followState();
  }

  async handleClick(event) {
    // Your code here
    event.preventDefault();
    // this.followState();
    if (this.followstate === "followed"){
      this.unfollow();
    }else{
      this.follow();
    }
  }

  async follow() {
    // Your code here
    this.followState = "following";
    


  }

  async unfollow() {
    // Your code here
  }

  render() {
    switch (this.followState) {
      // Your code here
    }
  }

  get followState() {
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) {
    this.toggleButton.dataset.followState = newState;
    this.render();
  }
}