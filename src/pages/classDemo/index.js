import {CompClass} from "../../utils/compClass";

export default class ClassDemo extends CompClass{


    render () {
        console.log(this.state)
        return (
            <div onClick={this.handleClickClass}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci animi architecto fuga ipsum laboriosam minima molestiae officiis omnis quae?
            </div>
        )
    }
}