package cyclingmadness.dto;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * Training aspect (force, endurance, speed) - part of training program.
 *
 * @author compmaster
 */
@Entity
@Table(name = "aspects")
public class Aspect implements Serializable {

	@Id
	@GeneratedValue
	private Long id;
	private String name;
	private String description;

	@ManyToOne
	private Program program;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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

	public Program getProgram() {
		return program;
	}

	public void setProgram(Program program) {
		this.program = program;
	}

}
