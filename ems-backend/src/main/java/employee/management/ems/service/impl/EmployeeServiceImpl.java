package employee.management.ems.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import employee.management.ems.dto.EmployeeDto;
import employee.management.ems.entity.Employee;
import employee.management.ems.exception.ResourceNotFoundException;
import employee.management.ems.mapper.EmpoyeeMapper;
import employee.management.ems.repository.EmployeeRepository;
import employee.management.ems.service.EmployeeService;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

	private EmployeeRepository employeeRepository;
	
	@Override
	public EmployeeDto createEmployee(EmployeeDto employeeDto) {
	
		Employee employee = EmpoyeeMapper.maptoEmployee(employeeDto);
		Employee savedEmployee= employeeRepository.save(employee);
		
		return EmpoyeeMapper.maptoEmployeeDto(savedEmployee);
	}

	@Override
	public EmployeeDto getEmployeeById(Long employeeId) {
		Employee employee=employeeRepository.findById(employeeId)
		.orElseThrow(()-> 
		new ResourceNotFoundException("Employee is not exists with given id:"+ employeeId));
		return EmpoyeeMapper.maptoEmployeeDto(employee);
	}

	@Override
	public List<EmployeeDto> getAllEmployees() {
		List<Employee> employees = employeeRepository.findAll();
		return employees.stream().map((employee)-> EmpoyeeMapper.maptoEmployeeDto(employee))
				.collect(Collectors.toList());
	}

	@Override
	public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee) {
		Employee employee=employeeRepository.findById(employeeId).orElseThrow(
				()-> new ResourceNotFoundException("Employee id not exixts with given id:"+ employeeId)
				);
		employee.setFirstname(updatedEmployee.getFirstname());
		employee.setLastname(updatedEmployee.getLastname());
		employee.setEmail(updatedEmployee.getEmail());
		
		Employee updatedEmployeeObj=employeeRepository.save(employee);
		return EmpoyeeMapper.maptoEmployeeDto(updatedEmployeeObj);
		
	}

	@Override
	public void deleteEmployee(Long employeeId) {
		Employee employee=employeeRepository.findById(employeeId).orElseThrow(
				()-> new ResourceNotFoundException("Employee id not exixts with given id:"+ employeeId)
				);
		
		employeeRepository.deleteById(employeeId);
		
	}

}
