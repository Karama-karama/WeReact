import React from 'react'; 
import './drop-down-btn.styles.scss';



class DropDown extends React.Component {
 constructor(props){
     super(props)
     this.state = {  
      listOpen: false,
      headerTitle: this.props.title , 
    
     equipes : [
     { " id": "001",
        "title": "Front",
        "selected": "false",
        "key": "team"
     },
    { " id": "002",
        "title": "Back",
        "selected": "false",
        "key": "team"
    },
    { " id": "003",
        "title": "Design",
        "selected": "false",
       " key": "team"
    },
    

    ]
     }
     this.toggleList = this.toggleList.bind(this);
     this.toggleSelected = this.toggleSelected.bind(this);
 }
 handleClickOutside(){
    this.setState({
      listOpen: false
    })
  };
  toggleList(prevState){
    this.setState
      ({ listOpen: !prevState.listOpen})
    };

    toggleSelected(id, key){
        let temp = this.state[key]
        temp[id].selected = !temp[id].selected  //Cannot read property '#<Class>' of undefined
        this.setState({
          [key]: temp
        })
      }

  render(){
    const{list} = this.props
    const{listOpen, headerTitle} = this.state  
    return( 
        <div className ="dd-wrapper">    
          <div className="dd-header" >
             <div className="dd-header-title" onClick={this.toggleList}>
              {headerTitle}
              </div>
                {listOpen  }
             </div>
             {listOpen && <ul className="dd-list">
            { this.state.equipes.map(equipe => 
            <p className="dd-list-item" key ={equipe.id} onClick ={ this.toggleSelected}> 
            {equipe.title} 
            </p>) }
        </ul>}
      </div>
      
     
      
    )
  }
}
export default DropDown ;