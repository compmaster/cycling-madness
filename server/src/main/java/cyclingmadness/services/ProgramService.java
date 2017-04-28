package cyclingmadness.services;

import cyclingmadness.dao.ProgramRepository;
import cyclingmadness.dto.Program;
import java.util.List;
import javax.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Service related to training programs and repository of programs.
 *
 * @author compmaster
 */
@Service
public class ProgramService {

	@Autowired
	private ProgramRepository programRepository;
	
	@PostConstruct
	public void init() {
		createDummyPrograms();
	}
	
	public List<Program> getAllPrograms() {
		return programRepository.findAll();
	}

	private void createDummyPrograms() {
		Program program = new Program();
		
	}
	
	
	
}
