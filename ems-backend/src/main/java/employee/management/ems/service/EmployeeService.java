package employee.management.ems.service;

import java.util.List;

import employee.management.ems.dto.EmployeeDto;

public interface EmployeeService {
 EmployeeDto createEmployee(EmployeeDto employeeDto) ;
	 
 EmployeeDto getEmployeeById(Long employeeId);
 
 List<EmployeeDto> getAllEmployees();
 
 EmployeeDto updateEmployee(Long employeeId, EmployeeDto updateEmloyee);
 
 void deleteEmployee(Long employeeId);
 }
