var AppointmentForm = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Make a new Appointment</h2>
        <form>
          <input name="title" placeholder="Appointment title" />
          <input name="appt_time" placeholder="Date and time" />
          <input type="submit" value="Make Appointment" />
        </form>
      </div>
      
    )
  }
});