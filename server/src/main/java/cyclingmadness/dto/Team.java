package cyclingmadness.dto;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Team entity class.
 *
 * @author compmaster
 */
@Entity
@Table(name="teams")
@SuppressWarnings("PersistenceUnitPresent")
public class Team implements Serializable {

	@Id
	@GeneratedValue
	private long id;
	private String name;
	private TeamType type;
	private TrainingMethod trainingMethod;
	private String info;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public TeamType getType() {
		return type;
	}

	public void setType(TeamType type) {
		this.type = type;
	}

	public TrainingMethod getTrainingMethod() {
		return trainingMethod;
	}

	public void setTrainingMethod(TrainingMethod trainingMethod) {
		this.trainingMethod = trainingMethod;
	}

	public String getInfo() {
		return info;
	}

	public void setInfo(String info) {
		this.info = info;
	}

}
