package cyclingmadness.dto;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * Season period - a part of training program.
 * @author compmaster
 */
@Entity
@Table(name="periods")
@SuppressWarnings("PersistenceUnitPresent")
public class Period implements Serializable {

	@Id
	@GeneratedValue
	private Long id;

	@ManyToOne(fetch=FetchType.LAZY)
	private Program program;
	
	private String name;
	private String description;
	private int weeks;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Program getProgram() {
		return program;
	}

	public void setProgram(Program program) {
		this.program = program;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getWeeks() {
		return weeks;
	}

	public void setWeeks(int weeks) {
		this.weeks = weeks;
	}
	
}
