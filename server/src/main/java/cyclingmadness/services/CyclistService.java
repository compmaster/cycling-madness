package cyclingmadness.services;

import cyclingmadness.dao.CyclistRepository;
import cyclingmadness.dto.Cyclist;
import cyclingmadness.dto.CyclistType;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;
import javax.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service related to cyclists.
 *
 * @author compmaster
 */
@Service
@Transactional
public class CyclistService {

	@Autowired
	CyclistRepository cyclistRepository;

	@PostConstruct
	public void init() {
		createDummyCyclists();
	}

	public List<Cyclist> getAllCyclists() {
		return cyclistRepository.findAll();
	}
	
	public Cyclist getCyclist(long id) {
		return cyclistRepository.findOne(id);
	}
	
	public void createCyclist(Cyclist cyclist) {
		cyclistRepository.save(cyclist);
	}

	public void updateCyclist(Cyclist cyclist) {
		cyclistRepository.save(cyclist);
	}

	public void deleteCyclist(long id) {
		cyclistRepository.delete(id);
	}
	
	private void createDummyCyclists() {
		List<Cyclist> dummyCyclists = new ArrayList<>();
		String[] names = getRandomDummyNames();
		Random random = new Random();
		for(int i=0; i<names.length; ++i) {
			Cyclist cyclist = new Cyclist();
			cyclist.setId(i+1);
			cyclist.setType(getRandomType());
			cyclist.setFirstName(names[i].split(" ")[0]);
			cyclist.setLastName(names[i].split(" ")[1]);
			cyclist.setWeight(random.nextInt(90) + 30);
			cyclist.setBornDate(getRandomBornDate());
			dummyCyclists.add(cyclist);
		}
		cyclistRepository.save(dummyCyclists);
	}
	
	private String[] getRandomDummyNames() {
		return new String[] {
			"Geertruida Bonnaire",
			"Aldebrand Long",
			"Heilwig Van Denend",
			"Emanuel Paulson",
			"Christin Scordato",
			"Myrrine Yamauchi",
			"Carles Neal",
			"Patricie Bajusz",
			"Rúben Ambrogi",
			"Aesop Kopecky",
			"Ambre Abrahams",
			"Rahman Padovan",
			"Matjaž Vega",
			"Otto Sykora",
			"Jurian Fox",
			"Bonifacy Rudawski",
			"Aldona Wiater",
			"Agata Jeleń",
			"Gertruda Niemec",
			"Edmund Fabian",
			"Kunegunda Pasternak",
			"Witek Kijek",
			"Stefek Śniegowski",
			"Marcelina Pokorny",
			"Ela Zima",
			"Nina Sokołowska",
			"Hubert Mencher",
			"Kajetan Ślązak",
			"Fryderyk Lis",
			"Oliwia Lawniczak"};
	}
	
	private CyclistType getRandomType() {
		Random random = new Random();
		int index = random.nextInt(CyclistType.class.getEnumConstants().length);
		return CyclistType.class.getEnumConstants()[index];
	}

	private Date getRandomBornDate() {
		Random random = new Random();
		int age = random.nextInt(70) + 18;
		LocalDate date = LocalDate.now();
		date.minusYears(age);
		return Date.from(date.atStartOfDay(ZoneId.systemDefault()).toInstant());
	}
	
}
