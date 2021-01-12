import React, { Component } from 'react';
import axios from 'axios';

export default class ClassList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: []
    }
  }

  componentDidMount(){
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
      .then(res => {
        this.setState({students: res.data})
      })
      .catch(err => console.log(err));
  }

  render() {
    const {students} = this.state;
    const mappedStudents = students.map((el, i) => {
      return <h3 key={i}>{el.first_name} {el.last_name}</h3>
    })

    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {mappedStudents}
      </div>
    )
  }
}