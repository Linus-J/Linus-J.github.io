<!DOCTYPE html>

<html>
	<head>
		<meta charset="UTF-8">
		<title>Top 100</title>
		<style>
			table {
				border-collapse: collapse;
				width: 100%;
				color: #005c69;
				font-family: Source Sans Pro;
				font-size: 25px;
			}
			th {
				background-color: #005c69;
				color: white;
			}
			tr:nth-child(even) {background-color: #f2f2f2}
		</style>
	</head>
	<body>
	<table>
		<tr>
			<th>Rank</th>
			<th>User</th>
			<th>ELO</th>
		</tr>
		<?php
			include('config.php');
			$con=new mysqli(DBHOST.':'. DBPORT,DBUSER,DBPASS,DBNAME);
			if ($con->connect_error){
				die("Connection failed:".$con->connect_error);
			}
			$st=$con->prepare("SELECT c.UserID, c.UserRank FROM ranks AS c ORDER BY UserRank DESC");
			$st->execute();
			$rs=$st->get_result();
			$i=0;
			if ($rs->num_rows>0){
				while($row=$rs->fetch_assoc()){
					$i++;
					echo "<tr><td>".$i."</td><td>".$row["UserID"]."</td><td>".$row["UserRank"]."</td></tr>";
				}
				echo "</table>";
			}
			else{
				echo "No results";
			}
			$con->close();
		?>
	</table>
	</body>
</html>
			