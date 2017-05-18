package cyclingmadness.services;

import cyclingmadness.dao.ProgramRepository;
import cyclingmadness.dto.Aspect;
import cyclingmadness.dto.Etude;
import cyclingmadness.dto.EtudeType;
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
		List<Aspect> a1 = createDummyAspects(p1);
		List<Etude> e1 = createDummyEtudes(p1, a1);
		p1.setName("Mountain cycling by Fuel");
		p1.setDescription("Highway to hell.");
		p1.setAspects(a1);
		p1.setEtudes(e1);
		Program p2 = new Program();
		List<Aspect> a2 = createDummyAspects(p2);
		List<Etude> e2 = createDummyEtudes(p2, a2);
		p2.setName("Samael's crush cyclist");
		p2.setDescription("Hardcore training plan.");
		p2.setAspects(a2);
		p2.setEtudes(e2);
		dummyPrograms.add(p1);
		dummyPrograms.add(p2);
		programRepository.save(dummyPrograms);
	}
	
	private List<Aspect> createDummyAspects(Program program) {
		List<Aspect> dummyAspects = new ArrayList<>();
		Aspect a1 = new Aspect();
		a1.setName("Oxygen");
		a1.setDescription("Long rides in oxygen zone.");
		a1.setProgram(program);
		Aspect a2 = new Aspect();
		a2.setName("Endurance");
		a2.setDescription("Long intensive rides.");
		a2.setProgram(program);
		Aspect a3 = new Aspect();
		a3.setName("Force");
		a3.setDescription("Very intensive uphills.");
		a3.setProgram(program);
		dummyAspects.add(a1);
		dummyAspects.add(a2);
		dummyAspects.add(a3);
		return dummyAspects;
	}
	
	private List<Etude> createDummyEtudes(Program program, List<Aspect> aspects) {
		List<Etude> dummyEtudes = new ArrayList<>();
		Etude e1 = new Etude();
		e1.setAspect(aspects.get(0));
		e1.setSymbol("E1");
		e1.setName("Recovery");
		e1.setDescription("Just enjoy the ride.");
		e1.setProgram(program);
		e1.setType(EtudeType.RECOVERY);
		Etude e2 = new Etude();
		e2.setAspect(aspects.get(0));
		e2.setSymbol("E2");
		e2.setName("Long ride");
		e2.setDescription("Ride in oxygen zone but more intensive.");
		e2.setType(EtudeType.RECOVERY);
		e2.setProgram(program);
		Etude f1 = new Etude();
		f1.setAspect(aspects.get(2));
		f1.setName("2-minute uphills");
		f1.setDescription("Find a 2-minute uphill and repeat 666 times.");
		f1.setSymbol("F1");
		f1.setProgram(program);
		f1.setType(EtudeType.INTERVAL);
		dummyEtudes.add(e1);
		dummyEtudes.add(e2);
		dummyEtudes.add(f1);
		return dummyEtudes;
	}

}
