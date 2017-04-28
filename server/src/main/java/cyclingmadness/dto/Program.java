package cyclingmadness.dto;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Training program entity.
 * @author compmaster
 */
@Entity
@Table(name="programs")
@SuppressWarnings("PersistenceUnitPresent")
public class Program implements Serializable {

	@Id
	private Long id;
	private String name;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
}