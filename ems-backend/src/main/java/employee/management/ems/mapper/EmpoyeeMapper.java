package employee.management.ems.mapper;

import employee.management.ems.dto.EmployeeDto;
import employee.management.ems.entity.Employee;

public class EmpoyeeMapper {

	public static EmployeeDto maptoEmployeeDto(Employee employee) {
		return new EmployeeDto(
				employee.getId(),
				employee.getFirstname(),
				employee.getLastname(),
				employee.getEmail()
				);
	}
	public static Employee maptoEmployee(EmployeeDto employeeDto) {
		return new Employee(
				employeeDto.getId(),
				employeeDto.getFirstname(),
				employeeDto.getLastname(),
				employeeDto.getEmail()
				);
	}
}
