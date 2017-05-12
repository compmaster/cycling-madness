package cyclingmadness.services;

import cyclingmadness.dao.ProgramRepository;
import cyclingmadness.dto.Program;
import java.util.ArrayList;
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
	
	public Program getProgram(Long id) {
		return programRepository.findOne(id);
	}
	
	public void createProgram(Program program) {
		programRepository.save(program);
	}

	public void updateProgram(Program program) {
		programRepository.save(program);
	}

	public void deleteProgram(long id) {
		programRepository.delete(id);
	}

	private void createDummyPrograms() {
		List<Program> dummyPrograms = new ArrayList<>();
		Program p1 = new Program();
		p1.setId(1L);
		p1.setName("Mountain cycling by Fuel");
		p1.setDescription("Highway to hell.");
		Program p2 = new Program();
		p2.setId(2L);
		p2.setName("Samael's crush cyclist");
		p2.setDescription("Hardcore training plan.");
		dummyPrograms.add(p1);
		dummyPrograms.add(p2);
		programRepository.save(dummyPrograms);
	}

}
