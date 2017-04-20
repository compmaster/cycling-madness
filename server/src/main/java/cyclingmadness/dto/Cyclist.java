package cyclingmadness.dto;

import java.util.Date;

/**
 * Cyclist entity class.
 *
 * @author compmaster
 */
public class Cyclist {

	private int id;
	private String firstName;
	private String lastName;
	private Date bornDate;
	private int weight;
	private CyclistType type;
	private Bike[] bikes;
	private Ride[] rides;
	private Team[] teams;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Date getBornDate() {
		return bornDate;
	}

	public void setBornDate(Date bornDate) {
		this.bornDate = bornDate;
	}

	public int getWeight() {
		return weight;
	}

	public void setWeight(int weight) {
		this.weight = weight;
	}

	public CyclistType getType() {
		return type;
	}

	public void setType(CyclistType type) {
		this.type = type;
	}

	public Bike[] getBikes() {
		return bikes;
	}

	public void setBikes(Bike[] bikes) {
		this.bikes = bikes;
	}

	public Ride[] getRides() {
		return rides;
	}

	public void setRides(Ride[] rides) {
		this.rides = rides;
	}

	public Team[] getTeams() {
		return teams;
	}

	public void setTeams(Team[] teams) {
		this.teams = teams;
	}

}
