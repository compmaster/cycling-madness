package cyclingmadness.dto;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * Exercise entity.
 *
 * @author compmaster
 */
@Entity
@Table(name = "etudes")
public class Etude implements Serializable {

	@Id
	@GeneratedValue
	private Long id;
	private String symbol;
	private String name;
	private String description;
	private EtudeType type; //TODO: Configured in database

	@ManyToOne
	private Aspect aspect;

	@ManyToOne
	private Program program;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSymbol() {
		return symbol;
	}

	public void setSymbol(String symbol) {
		this.symbol = symbol;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public EtudeType getType() {
		return type;
	}

	public void setType(EtudeType type) {
		this.type = type;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Aspect getAspect() {
		return aspect;
	}

	public void setAspect(Aspect aspect) {
		this.aspect = aspect;
	}

	public Program getProgram() {
		return program;
	}

	public void setProgram(Program program) {
		this.program = program;
	}

}
