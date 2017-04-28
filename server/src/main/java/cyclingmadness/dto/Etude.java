package cyclingmadness.dto;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Exercise entity.
 * @author compmaster
 */
@Entity
@Table(name="etudes")
public class Etude implements Serializable {

	@Id
	private Long id;
	private String symbol;
	private String name;
	private String category; //TODO: Separate entity
	private EtudeType type; //TODO: Configured in database

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

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public EtudeType getType() {
		return type;
	}

	public void setType(EtudeType type) {
		this.type = type;
	}
	
	
	
}
