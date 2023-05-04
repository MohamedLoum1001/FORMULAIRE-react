import React, { Component } from 'react'

function Field({ name, value, onChange, children }) {
  return <div className='form-group'>
    <label htmlFor='{name}'>{children}</label>
    <input type='text' value={value} onChange={onChange} id={name} name={name} className='form-control' />
  </div>
}

function Checkbox({ name, value, onChange, children }) {
  return <div className='form-checkbox'>
    <input type='checkbox' checked={value} onChange={onChange} id={name} name={name} className='form-check-input' />
    <label htmlFor='{name}' className='form-check-label'>{children}</label>
  </div>
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: '',
      prenom: '',
      newsletter: false,
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {
    const name = e.target.name
    const type = e.target.type
    const value = type === 'checkbox' ? e.target.checkbox : e.target.value
    this.setState({
      [name]: value
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    const data = JSON.stringify(this.state)
    this.setState({
      nom: "",
      prenom: "",
      newsletter: false,
    })
  }

  render() {
    return <div className='container'>
      <div className="row justify-content-center">
        <div className="col-6">
          <form onSubmit={this.handleSubmit}>
            <Field name="nom" value={this.state.nom} onChange={this.handleChange}>Nom</Field>
            <Field name="prenom" value={this.state.prenom} onChange={this.handleChange}>Prénom</Field>
            <Checkbox name="newsletter" value={this.state.newsletter} onChange={this.handleChange}>S'abonner à la newsletter</Checkbox>
            <div className="form-group my-3">
              <button type="submit" className='btn btn-primary'>Envoyer</button>
            </div>
            {JSON.stringify(this.state)}
          </form>
        </div>
      </div>

    </div>
  }

}

export default Home