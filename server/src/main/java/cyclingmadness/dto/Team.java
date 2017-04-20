package cyclingmadness.dto;

/**
 * Team entity class.
 *
 * @author compmaster
 */
public class Team {

	private int id;
	private String name;
	private TeamType type;
	private TrainingMethod trainingMethod;
	private String info;

	public int getId() {
		return id;
	}

	public void setId(int id) {
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
