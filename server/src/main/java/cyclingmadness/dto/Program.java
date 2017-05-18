package cyclingmadness.dto;

import java.io.Serializable;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 * Training program entity.
 *
 * @author compmaster
 */
@Entity
@Table(name = "programs")
public class Program implements Serializable {

	@Id
	@GeneratedValue
	private Long id;
	private String name;
	private String description;

	@OneToMany(mappedBy = "program")
	private List<Period> periods;

	@OneToMany(mappedBy = "program")
	private List<Etude> etudes;

	@OneToMany(mappedBy = "program")
	private List<Aspect> aspects;

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

	public List<Period> getPeriods() {
		return periods;
	}

	public void setPeriods(List<Period> periods) {
		this.periods = periods;
	}

	public List<Etude> getEtudes() {
		return etudes;
	}

	public void setEtudes(List<Etude> etudes) {
		this.etudes = etudes;
	}

	public List<Aspect> getAspects() {
		return aspects;
	}

	public void setAspects(List<Aspect> aspects) {
		this.aspects = aspects;
	}

}
